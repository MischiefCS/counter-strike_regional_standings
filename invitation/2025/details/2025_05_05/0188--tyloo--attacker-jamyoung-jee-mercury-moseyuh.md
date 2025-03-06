### Roster Details<br />
Team Name: TYLOO<br />
Roster: Attacker, JamYoung, Jee, Mercury, Moseyuh<br />
Global Rank: [188](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [25]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  417.7<br />
<br />
Final Rank Value (417.7) = Starting Rank Value (403.0) + Head To Head Adjustments (14.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.0
- 400 + ( ( 0.001 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 403.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      337 | 2025-02-11 | Lynn Vision Gaming | L   | 0.644      | -            | -                | -                | -         |    -7.04 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            4 |      344 | 2025-02-11 | ATOX Esports       | L   | 0.643      | -            | -                | -                | -         |    -0.88 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            3 |      346 | 2025-02-10 | Rare Atom          | L   | 0.642      | -            | -                | -                | -         |    -1.95 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            2 |      468 | 2025-02-08 | DogEvil            | W   | 0.623      | 0.143        | 0.000 (0.000)    | 0.581 (0.052)    | 0 (0.000) |    11.95 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            1 |      473 | 2025-02-08 | Harizma            | W   | 0.623      | 0.143        | 0.000 (0.000)    | 0.032 (0.003)    | 0 (0.000) |    12.62 | Attacker, JamYoung, Jee, Mercury, Moseyuh |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
