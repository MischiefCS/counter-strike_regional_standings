### Roster Details<br />
Team Name: Housebets<br />
Roster: apocdud, BRACE, damyo, pz, yourwombat<br />
Global Rank: [190](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [25]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  576.7<br />
<br />
Final Rank Value (576.7) = Starting Rank Value (600.6) + Head To Head Adjustments (-24.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.229[<sup>1</sup>](#table2)
- Bounty Collected: 0.156[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.097<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 600.6
- 400 + ( ( 0.097 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 600.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      219 | 2025-02-15 | KZG                         | W   | 0.861      | 0.143        | 0.000 (0.000)    | 0.219 (0.027)    | 0 (0.000) |    13.42 | apocdud, BRACE, damyo, pz, yourwombat        |
|            7 |      254 | 2025-02-14 | Vantage Esports             | L   | 0.854      | -            | -                | -                | -         |   -15.73 | apocdud, BRACE, damyo, pz, yourwombat        |
|            6 |      258 | 2025-02-14 | BBBCBMBS                    | W   | 0.854      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     7.25 | apocdud, BRACE, damyo, pz, yourwombat        |
|            5 |      418 | 2025-02-08 | DogEvil                     | L   | 0.814      | -            | -                | -                | -         |   -14.51 | apocdud, BRACE, damyo, pz, yourwombat        |
|            4 |      479 | 2025-02-07 | JiJieHao                    | L   | 0.808      | -            | -                | -                | -         |   -15.05 | apocdud, BRACE, damyo, pz, yourwombat        |
|            3 |     1870 | 2024-10-19 | Mindfreak (Australian team) | L   | 0.062      | -            | -                | -                | -         |    -0.93 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            2 |     1895 | 2024-10-18 | Only One Word               | W   | 0.055      | 0.333        | 0.000 (0.000)    | 0.225 (0.004)    | 0 (0.000) |     0.86 | apocdud, BRACE, damyo, Omichella, yourwombat |
|            1 |     1920 | 2024-10-17 | KZG                         | W   | 0.049      | 0.333        | 0.000 (0.000)    | 0.219 (0.004)    | 0 (0.000) |     0.74 | apocdud, BRACE, damyo, Omichella, yourwombat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($95.28)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-19 |      0.068 | $1,400.00      | $95.28          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
