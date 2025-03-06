### Roster Details<br />
Team Name: TYLOO<br />
Roster: Attacker, JamYoung, Jee, Mercury, Moseyuh<br />
Global Rank: [134](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [18]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  409.3<br />
<br />
Final Rank Value (409.3) = Starting Rank Value (402.3) + Head To Head Adjustments (7.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.3
- 400 + ( ( 0.001 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 402.3


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
|            5 |      337 | 2025-02-11 | Lynn Vision Gaming | L   | 0.457      | -            | -                | -                | -         |    -5.00 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            4 |      344 | 2025-02-11 | ATOX Esports       | L   | 0.456      | -            | -                | -                | -         |    -0.88 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            3 |      346 | 2025-02-10 | Rare Atom          | L   | 0.455      | -            | -                | -                | -         |    -2.15 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            2 |      468 | 2025-02-08 | DogEvil            | W   | 0.436      | 0.143        | 0.000 (0.000)    | 0.645 (0.040)    | 0 (0.000) |     6.81 | Attacker, JamYoung, Jee, Mercury, Moseyuh |
|            1 |      473 | 2025-02-08 | Harizma            | W   | 0.436      | 0.143        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     8.23 | Attacker, JamYoung, Jee, Mercury, Moseyuh |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
