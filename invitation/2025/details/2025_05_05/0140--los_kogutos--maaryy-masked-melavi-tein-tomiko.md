### Roster Details<br />
Team Name: Los kogutos<br />
Roster: maaryy, mASKED, Melavi, tein, tomiko<br />
Global Rank: [140](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [96]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  588.2<br />
<br />
Final Rank Value (588.2) = Starting Rank Value (597.7) + Head To Head Adjustments (-9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.042[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 597.7
- 400 + ( ( 0.091 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 597.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      715 | 2025-01-08 | EYEBALLERS                  | L   | 0.417      | -            | -                | -                | -         |    -3.60 | maaryy, mASKED, Melavi, tein, tomiko |
|           10 |      718 | 2025-01-07 | Insilio                     | L   | 0.412      | -            | -                | -                | -         |    -7.17 | maaryy, mASKED, Melavi, tein, tomiko |
|            9 |      725 | 2025-01-05 | BadGuys                     | W   | 0.397      | 0.417        | 0.000 (0.000)    | 0.130 (0.021)    | 0 (0.000) |     5.29 | maaryy, mASKED, Melavi, tein, tomiko |
|            8 |      731 | 2025-01-03 | FLuffy Gangsters            | L   | 0.385      | -            | -                | -                | -         |    -5.02 | maaryy, mASKED, Melavi, tein, tomiko |
|            7 |     1429 | 2024-11-16 | Partizan Esports            | L   | 0.064      | -            | -                | -                | -         |    -0.31 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|            6 |     1450 | 2024-11-15 | Mindfreak (Australian team) | W   | 0.057      | 0.617        | 0.000 (0.000)    | 0.006 (0.000)    | 1 (0.057) |     0.46 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|            5 |     1464 | 2024-11-15 | Team Turkey                 | W   | 0.056      | 0.617        | 0.000 (0.000)    | 0.011 (0.000)    | 1 (0.056) |     0.70 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|            4 |     1474 | 2024-11-14 | Metizport                   | L   | 0.052      | -            | -                | -                | -         |    -0.40 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|            3 |     1515 | 2024-11-13 | Team Canada                 | W   | 0.044      | 0.617        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.044) |     0.35 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|            2 |     1517 | 2024-11-13 | Team Norway                 | W   | 0.044      | 0.617        | 0.000 (0.000)    | 0.017 (0.000)    | 1 (0.044) |     0.37 | bnox, fr3nd, maaryy, mASKED, tomiko  |
|            1 |     1622 | 2024-11-08 | Rebels Gaming               | L   | 0.010      | -            | -                | -                | -         |    -0.15 | bnox, fr3nd, maaryy, mASKED, tomiko  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($890.62)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.071 | $12,500.00     | $890.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
