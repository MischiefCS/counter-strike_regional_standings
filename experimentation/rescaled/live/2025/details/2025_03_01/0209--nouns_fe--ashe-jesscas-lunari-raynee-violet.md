### Roster Details<br />
Team Name: Nouns.fe<br />
Roster: ashe, jesscas, lunari, raynee, violet<br />
Global Rank: [209](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [57]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  615.3<br />
<br />
Final Rank Value (615.3) = Starting Rank Value (605.5) + Head To Head Adjustments (9.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 605.5
- 400 + ( ( 0.108 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 605.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      607 | 2025-02-01 | MEGA JUNERS      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.060 (0.009)    | 0 (0.000) |     7.26 | ashe, jesscas, lunari, raynee, violet    |
|            6 |     1873 | 2024-10-18 | Blue Otter Karma | W   | 0.308      | 0.340        | 0.001 (0.000)    | 0.008 (0.001)    | 0 (0.000) |     4.67 | ashe, jesscas, katalyyst, lunari, raynee |
|            5 |     2234 | 2024-10-03 | Lotus            | W   | 0.208      | 0.340        | 0.001 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     3.16 | ashe, jesscas, katalyyst, lunari, raynee |
|            4 |     2522 | 2024-09-25 | Imp Pact         | L   | 0.155      | -            | -                | -                | -         |    -2.39 | ashe, jesscas, katalyyst, lunari, raynee |
|            3 |     2767 | 2024-09-18 | TSM Impact       | L   | 0.108      | -            | -                | -                | -         |    -1.68 | ashe, jesscas, katalyyst, lunari, raynee |
|            2 |     2968 | 2024-09-11 | FlyQuest RED     | L   | 0.061      | -            | -                | -                | -         |    -0.88 | ashe, jesscas, katalyyst, lunari, raynee |
|            1 |     3119 | 2024-09-05 | FLUFFY MAFIA     | L   | 0.021      | -            | -                | -                | -         |    -0.33 | ashe, Chowdzz, jesscas, lunari, raynee   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($415.69)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-18 |      0.308 | $1,350.00      | $415.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
