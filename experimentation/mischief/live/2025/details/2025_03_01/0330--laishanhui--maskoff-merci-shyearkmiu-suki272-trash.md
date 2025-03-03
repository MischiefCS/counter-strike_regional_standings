### Roster Details<br />
Team Name: LaiShanHui<br />
Roster: maskoff, merci, shyearkmiu, suki272, Trash<br />
Global Rank: [330](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_01.md)<br />
Regional Rank: [61]( ../../standings_asia_2025_03_01.md)<br />
<br />
Final Rank Value:  432.5<br />
<br />
Final Rank Value (432.5) = Starting Rank Value (408.0) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.004<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 408.0
- 400 + ( ( 0.004 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 408.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      108 | 2025-02-23 | T.Beast           | L   | 1.000      | -            | -                | -                | -         |   -16.47 | maskoff, merci, shyearkmiu, suki272, Trash |
|           10 |      113 | 2025-02-22 | Boring Players    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.455 (0.065)    | 0 (0.000) |    20.64 | maskoff, merci, shyearkmiu, suki272, Trash |
|            9 |      259 | 2025-02-17 | DogEvil           | L   | 1.000      | -            | -                | -                | -         |    -2.69 | maskoff, merci, shyearkmiu, suki272, Trash |
|            8 |      262 | 2025-02-16 | Kz5 esports       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.056 (0.008)    | 0 (0.000) |    15.05 | maskoff, merci, shyearkmiu, suki272, Trash |
|            7 |      273 | 2025-02-16 | Nalakuvara Gaming | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.103 (0.015)    | 0 (0.000) |    20.82 | maskoff, merci, shyearkmiu, suki272, Trash |
|            6 |      371 | 2025-02-14 | Nirvana Esports   | L   | 1.000      | -            | -                | -                | -         |    -9.03 | Merci8, Nuko, shyearkmiu, Suki272, Trash   |
|            5 |      703 | 2025-02-06 | Believe.          | L   | 1.000      | -            | -                | -                | -         |   -11.23 | hdgz, maskoff, merci, Nuko, shyearkmiu     |
|            4 |      714 | 2025-02-05 | Loveset           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.167 (0.024)    | 0 (0.000) |    14.86 | hdgz, maskoff, merci, Nuko, shyearkmiu     |
|            3 |     1063 | 2025-01-03 | 无敌非常规             | L   | 0.817      | -            | -                | -                | -         |   -12.32 | hdgz, merci, Nuko, shyearkmiu, Trash       |
|            2 |     1064 | 2025-01-02 | Boring Players    | W   | 0.812      | 0.143        | 0.000 (0.000)    | 0.455 (0.053)    | 0 (0.000) |    17.21 | hdgz, merci, Nuko, shyearkmiu, Trash       |
|            1 |     1083 | 2024-12-29 | 多年的回旋镖            | L   | 0.790      | -            | -                | -                | -         |   -12.34 | hdgz, merci, Nuko, shyearkmiu, Trash       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
